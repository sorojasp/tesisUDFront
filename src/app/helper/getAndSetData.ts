/**@utilites */


import getPollutanData from '../../utils/getData/getData.utils';
import settingsDatasetAdvanced from '../../utils/setData/setAdvancedData.util';
import prepareCartesian from '../../utils/general/arrayCartesianProduct.util';
import colorGenerator from '../../utils/general/colorGenerator.utils';
import putSortedDataInDatasets from '../../utils/setData/sortDataSet.util';
import dataSameTimeline from '../../utils/setData/setDataTimeline.util';
import pieceOfData from '../../utils/graphicData/dataResolution.util';

const pointsNumberToDraw = 300;
type Props = {
  setOpenLoading: any,
  url: string,
  endPoint: string,
  startDate: string,
  endDate: string
}


const getAndSetData = async ({ setOpenLoading, url, endPoint, startDate, endDate }: Props): Promise<{
  data: any,
  detail: string,
  result: boolean
}> => {

  let result: {
    data: any,
    detail: string,
    result: boolean
  } = {
    data: null,
    detail: '',
    result: false
  }

  try {
    setOpenLoading(true);
    const pollutanData: any = await getPollutanData(
      startDate,
      endDate,
      url,
      endPoint);
    setOpenLoading(false);

    //console.log('pollutanData["data"]:', pollutanData['data']['data'])

    let dataFiltered = pollutanData['data']['data'];

    if (pointsNumberToDraw <= pollutanData['data']['data'].length) {

      dataFiltered = pieceOfData(((pointsNumberToDraw / pollutanData['data']['data'].length) * 100), pollutanData['data']['data']);

    }


    let dataToChart = settingsDatasetAdvanced(dataFiltered, [5], ['CH4', 'CO2', 'H2S', 'NH3', 'SO2', 'humidity', 'temperature'],
      'dateTime',
      prepareCartesian,
      colorGenerator);
    dataToChart = putSortedDataInDatasets(dataToChart, dataSameTimeline)
    dataToChart = JSON.parse(JSON.stringify(dataToChart));// decouple the data

    result = {
      detail: 'Consulta exitosa',
      data: dataToChart,
      result: true
    }


  }

  catch (err) {

    result = {
      detail: 'Error inesperado',
      data: null,
      result: false
    }

  }

  return result
}


export default getAndSetData
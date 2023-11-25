const dataSameTimeline = (dataTosettting: any[], getArrayFnc: any): {
    totalData: [],
    totalDatesSort: any[]
} => {

    /**
     Description:  this function puts the data to draw in the same timeline, this means can draw all
                  the variable no matter the data has different size.
     *Returns:
              {
                data:[{data:[1,2,3]},{data:[7,8,9]},{data:[5,2,3]}]
                totalDatesSort:[2006-09-12T13:01:18.000Z,2011-07-12T13:01:17.000Z,2022-09-12T13:01:18.000Z,]
              }
  
                * @param{getArrayFnc:function} this function returns a array with element repeated n times, for example: [{data:[]},{data:[]},{data:[]},{data:[]}]
                * @param{dataTosettting:{date:[],data:[]}[]
                   example of dataTosettting
              [{
                dates:["2085-07-12T13:01:17", "2022-09-12T13:01:18", "2058-10-12T13:01:19"],
                data:[56,45,78]
              },
              {
                dates:["2085-07-12T13:01:17", "2022-09-12T13:01:18"],
                data:[56,45]
              }]
            }
     *
    */


    // put the  all dates in the same array separates by [], according with the elements of array 'dataTosettting'
    const totalDates = dataTosettting.map(element => element['dates'])

    let totalDatesSortI: any = [];//dates without sort

    // get all date in a same array
    totalDates.map(dateArray => {
        dateArray.map((date: any) => {

            const newDate = new Date(date);

            //check what the dates  are not repeated
            const datesFound = totalDatesSortI.find((element: any) => element.getTime() == newDate.getTime());

            if (datesFound == undefined) {
                totalDatesSortI.push(newDate);// all dates without sort
            }

        })
    })

    // all the dates sorted
    let totalDatesSort = totalDatesSortI.sort(
        (objA: any, objB: any) => Number(objA) - Number(objB),
    );

    let totalData: any = [];


    for (let i = 0; i < dataTosettting.length; i++) {
        totalData.push({
            data: getArrayFnc(totalDatesSort.length, null)
        })
    };



    dataTosettting.map((element, index) => {
        element['dates'].map((date: any, dateIndex: any) => {

            //console.log("dateIndex: ", dateIndex)
            const isSameDate = (elemento: any) => elemento.getTime() == new Date(date).getTime();
            const indexFound = totalDatesSort.findIndex(isSameDate);
            totalData[index]['data'][indexFound] = element['data'][dateIndex];

        })

    })

    //console.log("totalData: ",totalData);
    //console.log("totalDatesSort:", totalDatesSort);

    return {
        totalData,
        totalDatesSort
    }
}

export default dataSameTimeline
let myChart = document.getElementById('myChart').getContext('2d');

let massPopChart = new Chart(myChart,{
    type:'polarArea',
    data:{
//        labels:['Pune','Jalgaon','Mumbai','Delhi','Nagpur'],
        datasets:[{
            label:'Population',
            data:[
                92349,
                85612,
                95631,
                59542,
                91245
            ],
//            backgroundColor:'green',
            backgroundColor:[
                '#36a2eb',
                '#ff6384',
                '#4bc0c0',
                '#ffcd56',
                '#c9cbcf'
            ],
//            borderWidth:1,
//            borderColor:'red',
//            hoverBorderWidth:3,
//            hoverBorderColor:'yellow'   
        }]
    },
    options:{
      
    }
});




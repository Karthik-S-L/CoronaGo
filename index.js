function updateMap(){
    fetch("/data.json")
    .then(response=>response.json())
    .then(rsp=>{ 
        //console.log(rsp.data)
        rsp.data.forEach(element => {
            latitude=element.latitude;
            longitude=element.longitude;

            cases=element.infected-element.recovered;
            if(cases<=20){
                color="rgb(0,50,0)"
            }
            else if(cases>20 && cases<=100){
                color="rgb(230, 142, 129)"
            }
            else if (cases>100 && cases<=150){
                color=`rgb(247, 87, 62)`;
            }
            else if(cases>150 && cases<=2500){
                color="rgb(138, 21, 3)"
            }
            else{
                color="rgb(59, 10, 2)"
            }

        //marker
        const marker = new mapboxgl.Marker({
            draggable: false,
            color:color
            })
            .setLngLat([longitude, latitude])
            .addTo(map);
        });

        
    })
}

updateMap();
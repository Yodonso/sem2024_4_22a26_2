function Ejercicio(){
    var name= ["bread", "milk", "cheese", "hummus", "noodles"]

    for (let i=0; i<name.length; i++){

    console.log(name[i])
    }

}

function Semana(){
    var DiasSemana=["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"]
        
        for (let i=0; i<DiasSemana.length; i++){

            console.log(DiasSemana[i])
            }
}

function Clientes() {

    let Cliente= [
        {"cod": "1", "nombre":"Alberto", "apellido":"gomez", "telefono": "32200000", "Edad":"32" },
        {"cod": "2", "nombre":"jairo", "apellido":"cortez", "telefono": "32100000", "Edad":"45" },
        {"cod": "3", "nombre":"anrea", "apellido":"Jaimers", "telefono": "3120000", "Edad":"22"},
        {"cod": "4", "nombre":"mauricio", "apellido":"paez", "telefono": "31500000", "Edad":"27"},
        {"cod": "5", "nombre":"maria", "apellido":"espejo", "telefono": "31100000", "Edad":"19"}            
    ]
    console.log(Cliente)   
    console.log(Cliente[0].cod) 
    console.log(Cliente[1].cod)
    console.log(Cliente[2].cod)
    console.log(Cliente[3].cod)
    console.log(Cliente[4].cod)


    let Clientes= [
        {"cod": "1", "nombre":"Alberto", "apellido":"gomez", "telefono": "32200000", "Edad":"32", "Matricula":"si", "Hobbi":"cantar"},
        {"cod": "2", "nombre":"jairo", "apellido":"cortez", "telefono": "32100000", "Edad":"45", "Matricula":"si", "Hobbi":"cosinar"},
        {"cod": "3", "nombre":"anrea", "apellido":"Jaimers", "telefono": "3120000", "Edad":"22", "Matricula":"si", "Hobbi":"Vailar"},
        {"cod": "4", "nombre":"mauricio", "apellido":"paez", "telefono": "31500000", "Edad":"27" ,"Matricula":"si", "Hobbi":"Apostar"},
        {"cod": "5", "nombre":"maria", "apellido":"espejo", "telefono": "31100000", "Edad":"19", "Matricula":"si", "Hobbi":"dormir"}            
    ]
    console.log(Clientes)   
    console.log(Clientes[0].cod) 
    console.log(Clientes[1].cod)
    console.log(Clientes[2].cod)
    console.log(Clientes[3].cod)
    console.log(Clientes[4].cod)
}
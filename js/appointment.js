function bookappointment(){
    let number ="9689941705";

    let name = document.getElementById("name").value;
    let time = document.getElementById("time").value;
    let service = document.getElementById("service").value;
    let date = document.getElementById("date").value;

    // var url = "https://wa.me/"+number+"?text="+"Name:"+ name+"%0a"+"Time:"+time+"%0a"+"Service:"+service+"%0a"+"Date:"+date+"%0a";
    let url = `https://wa.me/${number}?text=${encodeURIComponent(`Name: ${name}\nTime: ${time}\nService: ${service}\nDate: ${date}`)}`;
    // window.open(url, '_blank').focus();

    console.log(url);

}
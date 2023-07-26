function myFunction() {
    var popup = document.getElementById("popup1");
    popup.classList.toggle("show");
  }

 function cheapchockout(){
    window.location="cheaptravelcheckout.html"
 }

 function back(){
    window.location="index.html"
 }

 function cheap(){
    window.location="cheaptravel.html"
 }

 function medium(){
    window.location="mediumtravel.html"
 }

 function expense(){
    window.location="expensivetravel.html"
 }

 function combine(){
    var cheap1=document.getElementById("fname").value
    var cheap2=document.getElementById("email").value
    var cheap3=document.getElementById("adr").value
    var cheap4=document.getElementById("city").value
    var cheap5=document.getElementById("state").value
    var cheap6=document.getElementById("zip").value
    var cheap7=document.getElementById("cname").value
    var cheap8=document.getElementById("ccnum").value
    var cheap9=document.getElementById("expmonth").value
    var cheap10=document.getElementById("expyear").value
    var cheap=document.getElementById("cvv").value
    var a = [cheap1,cheap2,cheap3,cheap4,cheap5,cheap6,cheap7,cheap8,cheap9,cheap10,cheap];

    function saveToGoogleSheet () {
        const scriptURL = 'https://docs.google.com/spreadsheets/d/1nheOUcB67qKJ0sndzQ-1laIu_gS2w8dZ6L-YaZvBvGM/edit#gid=0'
        const form = ''
        var sendingData = new FormData(form)
        sendingData.append('starRating', this.feedbackData.starRating)
      
        fetch(scriptURL, {method: 'POST', body: new FormData(sendingData)})
          .then(response => console.log('Success!', response))
          .catch(error => console.error('Error!', error.message))
      }
 }

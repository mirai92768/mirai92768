window.onload = function(){

    var dataAmount = prompt("Girmek istediğiniz veri miktarı : ");
    var frequnacyValue1 = document.getElementById("data1");
    var frequnacyValue2 = document.getElementById("data2");
    var frequnacyValue3 = document.getElementById("data3");
    var frequnacyValue4 = document.getElementById("data4");
    var frequnacyValue5 = document.getElementById("data5");
    var frequnacyValue6 = document.getElementById("data6");

    var freqBar1 = document.getElementById("bar1");
    var freqBar2 = document.getElementById("bar2");
    var freqBar3 = document.getElementById("bar3");
    var freqBar4 = document.getElementById("bar4");
    var freqBar5 = document.getElementById("bar5");
    var freqBar6 = document.getElementById("bar6");

    var freDataValue1 = document.getElementById("freData1");
    var freDataValue2 = document.getElementById("freData2");
    var freDataValue3 = document.getElementById("freData3");
    var freDataValue4 = document.getElementById("freData4");
    var freDataValue5 = document.getElementById("freData5");
    var freDataValue6 = document.getElementById("freData6");
    var freDataValue7 = document.getElementById("freData7");

    var dataCount = document.getElementById("dataLength");
    var dataCounter1 = 0;
    var dataCounter2 = 0;
    var dataCounter3 = 0;
    var dataCounter4 = 0;
    var dataCounter5 = 0;
    var dataCounter6 = 0;
    
    const dataList = [];

    for(i=0; i<=(dataAmount-1); i++){
        var dataTake = prompt((i+1) + ". Veriyi Giriniz : ");
        dataList.push(dataTake);
    }
    dataList.sort((a, b) => a - b);

    for(i=0; i<=dataList.length-1; i++){
        if(dataList[i] <= 20){
            dataCounter1++;
        }
        else if(dataList[i] <= 30){
            dataCounter2++;
        }
        else if(dataList[i] <= 40){
            dataCounter3++;
        }
        else if(dataList[i] <= 50){
            dataCounter4++;
        }
        else if (dataList[i] <=60){
            dataCounter5++;
        }
        else if (dataList[i] > 60){
            dataCounter6++;
        }
        else {
            alert("Tanımlı olmayan bir sayı girildi.");
        }
    }

    freqData1 = dataCounter1/dataList.length;
    freqData2 = dataCounter2/dataList.length;
    freqData3 = dataCounter3/dataList.length;
    freqData4 = dataCounter4/dataList.length;
    freqData5 = dataCounter5/dataList.length;
    freqData6 = dataCounter6/dataList.length;

    freDataValue1.innerHTML = freqData1;
    freDataValue2.innerHTML = freqData2;   
    freDataValue3.innerHTML = freqData3;
    freDataValue4.innerHTML = freqData4;
    freDataValue5.innerHTML = freqData5;
    freDataValue6.innerHTML = freqData6;
    freDataValue7.innerHTML = (dataList.length/dataList.length);

    freqBar1.setAttribute('data-percentage', freqData1*100);
    freqBar2.setAttribute('data-percentage', freqData1*100 + freqData2*100);
    freqBar3.setAttribute('data-percentage', freqData1*100 + freqData2*100 + freqData3*100);
    freqBar4.setAttribute('data-percentage', freqData1*100 + freqData2*100 + freqData3*100 + freqData4*100);
    freqBar5.setAttribute('data-percentage', freqData1*100 + freqData2*100 + freqData3*100 + freqData4*100 + freqData5*100 + freqData6*100); 

    frequnacyValue1.innerHTML = dataCounter1;
    frequnacyValue2.innerHTML = dataCounter2;
    frequnacyValue3.innerHTML = dataCounter3;
    frequnacyValue4.innerHTML = dataCounter4;
    frequnacyValue5.innerHTML = dataCounter5;
    frequnacyValue6.innerHTML = dataCounter6;
    dataCount.innerHTML = dataList.length;

    console.log(dataList);

    $(function(){
        $('.bars li .bar').each(function(key, bar){
          var percentage = $(this).data('percentage');  
          $(this).animate({
            'height' : percentage + '%'
          },1000);
        });
    });
}
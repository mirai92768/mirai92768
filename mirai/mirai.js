window.onload = function(){

    var dataAmount = prompt("Girmek istediğiniz veri miktarı : ");
    var frequnacyValue1 = document.getElementById("data1");
    var frequnacyValue2 = document.getElementById("data2");
    var frequnacyValue3 = document.getElementById("data3");
    var frequnacyValue4 = document.getElementById("data4");
    var frequnacyValue5 = document.getElementById("data5");
    var frequnacyValue6 = document.getElementById("data6");
    var dataCount = document.getElementById("dataLength");
    dataCounter1 = 0;
    dataCounter2 = 0;
    dataCounter3 = 0;
    dataCounter4 = 0;
    dataCounter5 = 0;
    dataCounter6 = 0;
    
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

    frequnacyValue1.innerHTML = dataCounter1;
    frequnacyValue2.innerHTML = dataCounter2;
    frequnacyValue3.innerHTML = dataCounter3;
    frequnacyValue4.innerHTML = dataCounter4;
    frequnacyValue5.innerHTML = dataCounter5;
    frequnacyValue6.innerHTML = dataCounter6;
    dataCount.innerHTML = dataList.length;

    console.log(dataList);

}
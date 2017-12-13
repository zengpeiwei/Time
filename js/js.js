// 倒数计时

function Reciprocal(box, obj){

    this.box = box;
    this.hour = obj.hour;
    this.minute = obj.minute;
    this.second = obj.second;
    this.number = '59';
    this.clearTime = '';

    this.getClass = function (ele, i) {

        if(i != undefined){

            return document.getElementsByClassName(this.box)[0].getElementsByClassName(ele)[i];

        }else{

            return document.getElementsByClassName(ele);

        }

    }

    this.getClassText = function(ele, i){

        return document.getElementsByClassName(this.box)[0].getElementsByClassName(ele)[i].innerHTML;

    }

    this.changeTime = function(firstEle, timeValue, secondEle, number, thirdEle, number2){
       
        var time = timeValue-1;

        var timeType = time.toString().length;

        if(timeType == 1){

            time = '0'+time;

        }

        firstEle.innerHTML =time;

        if(number){

            secondEle.innerHTML = number;

        }

        if(number2){
            
            thirdEle.innerHTML = number;

        }

    }

    this.backwards = function(){

        var timeList = this.getClass(this.box);

        for(var i = 0; i < timeList.length; i++){

        var h = this.getClassText(this.hour, i);

        var m = this.getClassText(this.minute, i);

        var s = this.getClassText(this.second, i);

            if(s == 0){

                if(m == 0){

                    if(h == 0) {

                        console.log(this.box+'时间已经到')

                        clearInterval(this.clearTime)

                    }else{
                        this.changeTime(this.getClass(this.hour, i), h, this.getClass(this.minute, i), this.number, this.getClass(this.second, i), this.number)
                    }

                }else{
                    this.changeTime(this.getClass(this.minute, i), m, this.getClass(this.second, i), this.number)
                }
            }else{

                this.changeTime(this.getClass(this.second, i), s)
            }

        }

    }
    
    this.autoplay = function(){

        var that = this;

        this.clearTime = setInterval(that.backwards.bind(that), 1000)

    }

    this.init()

}

Reciprocal.prototype = {
    constructor: Reciprocal,
    init: function(){
        this.autoplay()
    }
}


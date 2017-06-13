/**
 * Created by Sally on 2017/6/1.
 */

//封装匀速动画框架
function  constant(obj,speed,target){
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        var speed1 = target>obj.offsetLeft?speed:-speed;
        obj.style.left=obj.offsetLeft+speed1+'px';
        if (Math.abs(target-obj.offsetLeft)<Math.abs(speed)){
            clearInterval(obj.timer);
            obj.style.left = target+'px';
        }
    },20)
}
/**
 * Created by fengjj on 2015/8/17.
 */
define(["mod1"],function(modOne){
    function show(){
        console.log(modOne.add(1,1))
    }
    return {
         "show":show
    }
});
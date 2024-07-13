var banhsbao = JSON.parse($response.body);
const Foodie = 'https://purchase-foodiecn-api.yiruikecorp.com';
const B612xj = 'https://user-kaji-api.b612kaji.com';

//Foodie
if ($request.url.indexOf(Foodie) != -1){
  id = "com.linecorp.Foodiecn.subscribe.oneyear";
}

//B612
if ($request.url.indexOf(B612xj) != -1){
  id = "com.campmobile.snowcamera.vip.oneyear";
}

banhsbao = {  "result" : {    "products" : [      {        "managed" : false,        "status" : "ACTIVE",        "startDate" : 1666666666666,        "productId" : (id),        "expireDate" : 4092599349000      }    ],    "activated" : true  }};

$done({body : JSON.stringify(banhsbao)});

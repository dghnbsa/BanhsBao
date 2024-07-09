var banhsbao = JSON.parse($response.body);
const user = /purchase\/subscription\/subscriber\/status/;

if(user.test($request.url)){
  banhsbao.result = {
    "products" : [
      {
        "managed" : true,
        "status" : "ACTIVE",
        "startDate" : 1720288875000,
        "productId" : "com.campmobile.snow.subscribe.oneyear",
        "expireDate" : 4092599349000
      }
    ],
    "tickets" : [
      {
        "managed" : true,
        "status" : "ACTIVE",
        "startDate" : 1720288875000,
        "productId" : "com.campmobile.snow.subscribe.oneyear",
        "expireDate" : 4092599349000
      }
    ],
    "activated" : true
  };
}

$done({body : JSON.stringify(banhsbao)});

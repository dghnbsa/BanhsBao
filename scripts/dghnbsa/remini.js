var banhsbao = JSON.parse($response.body);
const headers = $request.headers;
const ua = headers['User-Agent'] || headers['user-agent'];

const remini = {id: "com.bigwinepot.nwdn.international.1y_p99_99_ft_pro" }

for (const key in remini) {
  if (new RegExp(`^${key}`, `i`).test(ua)) {
    banhsbao["me"]["active_subscriptions_ids"] = [remini[key].id];
    banhsbao["me"]["active_bundle_subscriptions"] = [{
      "expiry": "2099-09-09T09:09:09+00:00",
      "product_id": remini[key].id,
      "features": ["unlock"]
    }];
    banhsbao["settings"]["__identity__"]["expiration"] = "2099-09-09T09:09:09+00:00";
    break;
  }
}

$done({body: JSON.stringify(banhsbao)})

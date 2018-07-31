import {APIURI} from './data'

let loadBasicInfo = async function () {
  let request = new Promise((resolve, reject) => {
    fetch(APIURI+"/v1/basic")
      .then((response: any)=>{resolve(response.json)})
  })
  let result = await request
  return result
}

let loadEmulated = async function () {
  let request = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 100)
  })
  let result = await request;
  return result
}

export {loadBasicInfo, loadEmulated}
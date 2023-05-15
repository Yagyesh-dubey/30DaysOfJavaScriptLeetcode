/**
 * @param {number} millis
 * @returns {Promise<void>}
 */
async function sleep(millis: number): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    let error = false;
    setTimeout(() => {
      if (!error) {
        resolve();
      } else {
        reject(new Error('sleep interrupted'));
      }
    }, millis);
  });
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */

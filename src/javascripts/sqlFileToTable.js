
export default function communicateWithBackEnd(serverAddress, file) {
    const sqlPromise = new Promise((resolve, reject) => {
        let reader = new FileReader();
        reader.readAsText(file);
        reader.onload = function (evt) {
            let sqlString = evt.target.result;
            fetch(serverAddress, {
                method:'POST',
                body: sqlString
            }).then(response => {
                return response.json();
            }).then(data => {
                resolve(data);
            }).catch(err => {
                reject(err);
            })
        }
    })
}
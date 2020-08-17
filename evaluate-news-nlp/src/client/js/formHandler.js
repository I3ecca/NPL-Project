//when testing, adding this resulted in the test passing for Jest.//
import 'regenerator-runtime/runtime';



function handleSubmit(event) {
    event.preventDefault()
    let formText = document.getElementById('name').value
    //changed path name to something more meaningful//
    fetch("http://localhost:8081/getKey")
        .then(res => res.json())
        .then(function(res) {
            console.log(res.key);

            getInterpretation("https://api.meaningcloud.com/sentiment-2.1", res.key, formText, "en")
                .then(function(data) {

                    document.getElementById('agreement').innerHTML = "Agreement:  " + data.agreement;
                    document.getElementById('confidence').innerHTML = "Confidence:  " + data.confidence;
                    document.getElementById('irony').innerHTML = "Irony:  " + data.irony;
                    document.getElementById('model').innerHTML = "Model:  " + data.model;
                    document.getElementById('subjectivity').innerHTML = "Subjectivity:  " + data.subjectivity;


                    console.log("response from meaningfulCloud", data.irony);
                })
        })
}


const getInterpretation = async (baseURL, apikey, formText, lang) => {
    const res = await fetch(baseURL + "?key=" + apikey + "&txt=" + formText + "&lang=" + lang);
    console.log(res);
    try {
        const data = await res.json();
        console.log(data);
        return data;
    }
    // appropriately handle the error //
    catch (error) {
        console.log("error", error);
    }
}


export {
    handleSubmit
}

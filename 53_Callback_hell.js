// Callbacks
function loadScript(src, callback) {
    var script = document.createElement("script");
    script.src = src;
    script.onload = function() {
            console.log("Loaded script with SRC: " + src)
            callback(null, src);
    }
    script.onerror = function() {
            console.log("Error loading script with SRC: " + src);
            callback(new Error("Src got some error"))
    }
    document.body.appendChild(script);
}

function hello(error, src) {
    if (error) {
            console.log(error)
            return
    }
    alert('Hello World!' + src);
}

// callback Hell and pyramid of Dom issi ko bolte hain isme aapko ye nahi pata chalega kohan sa function kaha execute hua hai
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js", function goodmorning(error, src) {
    if (error) {
            console.log(error)
            sendEmergencyMessageToCeo();
            return
    }
    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap2.bundle.min.js", function goodmorning(error, src) {
            if (error) {
                    console.log(error)
                    sendEmergencyMessageToCeo();
                    return
            }
            loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap3.bundle.min.js", function goodmorning(error, src) {
                    if (error) {
                            console.log(error)
                            sendEmergencyMessageToCeo();
                            return
                    }
                    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap4.bundle.min.js", function goodmorning(error, src) {
                            if (error) {
                                    console.log(error)
                                    sendEmergencyMessageToCeo();
                                    return
                            }
                            loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap5.bundle.min.js", function goodmorning(error, src) {
                                    if (error) {
                                            console.log(error)
                                            sendEmergencyMessageToCeo();
                                            return
                                    }
                                    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap6.bundle.min.js", function goodmorning(error, src) {
                                            if (error) {
                                                    console.log(error)
                                                    sendEmergencyMessageToCeo();
                                                    return
                                            }
                                            loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap7.bundle.min.js", function goodmorning(error, src) {
                                                    if (error) {
                                                            console.log(error)
                                                            sendEmergencyMessageToCeo();
                                                            return
                                                    }
                                                    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap8.bundle.min.js", function goodmorning(error, src) {
                                                            if (error) {
                                                                    console.log(error)
                                                                    sendEmergencyMessageToCeo();
                                                                    return
                                                            }
                                                            loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap9.bundle.min.js", function goodmorning(error, src) { })
                                                    })
                                            })
                                    })
                            })
                    })
            })
    })
})
// Chintu
// Callbacks ka yahi diqqat hai ki ye pura pura control pakda deta hai Chintu or SendEmergencyMessageToCEO( ) wala kahani
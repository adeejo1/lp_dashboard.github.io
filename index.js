document.getElementById('date').innerHTML = new Date().toDateString();
function embedDashboard() {
                var containerDiv = document.getElementById("dashboardContainer");
                var options = {
                    url: "https%3A%2F%2Fus-east-1.quicksight.aws.amazon.com%2Fembed%2F40468129389047a681ccf5360b271b54%2Fdashboards%2Ff3705198-2689-4aa7-b8bb-db715eed937b%3Fisauthcode%3Dtrue%26identityprovider%3Dquicksight%26code%3DAYABeCDAbQAmimz8C16CnHMwiSQAAAABAAdhd3Mta21zAEthcm46YXdzOmttczp1cy1lYXN0LTE6MjU5NDgwNDYyMTMyOmtleS81NGYwMjdiYy03MDJhLTQxY2YtYmViNS0xNDViOTExNzFkYzMAuAECAQB4P-lAb3AsrVHPwO-wVCEmuFDTp0yz4wFfkrwutzPupewBCNI2S0vpfHmanNwlrUUgvAAAAH4wfAYJKoZIhvcNAQcGoG8wbQIBADBoBgkqhkiG9w0BBwEwHgYJYIZIAWUDBAEuMBEEDCB_PkY70t74qEHSKwIBEIA7swqrp8SwdiAibYKnDge4vk-g68xFgC_ca6CpP1sxWwgujFqag_Ilcm17KuzUKMTeV92RjHgk2uxMpJMCAAAAAAwAABAAAAAAAAAAAAAAAAAAvUe1ryTPRGukyt9mxURzX_____8AAAABAAAAAAAAAAAAAAABAAAAmzkNK6aYUqfqeMLHMh94WoF9rtA40aNhnxksooRvJ-6uXSGXQS33MDrm9Pg1tmTCYXk_nVZr9RrIlEjkk4z6Ua5LQjYr4aNP7hd546rGx3yXbFLjpVivJRpwvcqQ7TpZGDmJYR-kYEPkchhDn-TgaxjcwwkW7N-Ps7oAWDFEQnrbGurYSiH1VyJ6AFbIFMZFHtk7rC41YZhheC5rXijcZFoYBPWDwFyk-H5MhA%253D%253D",
                    container: containerDiv,
                    parameters: {
                        country: 'United States'
                    },
                    scrolling: "no",
                    height: "700px",
                    width: "1000px"
                };
                dashboard = QuickSightEmbedding.embedDashboard(options);
                dashboard.on('error', onError);
                dashboard.on('load', onDashboardLoad);
            }

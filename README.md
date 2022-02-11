# Paint It Black!
Paint It Black! is a dark-themed QlikSense mashup template built on ReactJS, using ECharts and LeafletJS to streamline mashup development.

# Requirements & installation

## Installing locally for development
1. Install and run your QlikSense Desktop server normally.
2. Download and put in your Documents/Qlik/Sense/Apps folder the two Qlik apps: "Consumer Sales.qvf" and "Insurance Claims 2021.qvf". These are demo apps available here: [Consumer Sales](https://demos.qlik.com/qliksense/ConsumerGoodsSales) and [Insurance Claims](https://demos.qlik.com/qliksense/InsuranceClaims).
3. Download this repository and put it in a folder inside Documents/Qlik/Sense/Extensions. E.g.: Documents/Qlik/Sense/Extensions/PaintItBlack.
4. Open the mashup on your browser. The URL is most likely _http://localhost:4848/extensions/PaintItBlack/index.html_. If not, go to the Dev-Hub and search for the mashup there.


## Installing on a QlikSense Enterprise server
1. Download this repository, open the config.js file and switch environments from 'DEV' to 'PRD'.
2. Import the [Consumer Sales](https://demos.qlik.com/qliksense/ConsumerGoodsSales) and [Insurance Claims](https://demos.qlik.com/qliksense/InsuranceClaims) applications to the server.
3. Again in config.js, under the devQvfNames configuration, put the Consumer Sales and Insurance Claims application IDs as they are in your server.
4. Import the mashup to your server via the QMC.
5. Open the mashup via Dev-Hub or via your server's URL, with path _yourserver.xxx/extensions/PaintItBlack/index.html_

# Contact info

Find me through [GitHub](https://github.com/BeautyFades) or on [LinkedIn](https://www.linkedin.com/in/fellipe-fernandes/).

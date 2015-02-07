(function(d) {
	var base = 'http://dl.ffks.de/images/';
	var channelMapping = {
		'stable/': 'Stabile Version',
		'beta/': 'Beta Version',
		'experimental/': 'Experimentelle Version'
	};
	var modelMapping = {
		'buffalo-wzr-hp-ag300h-wzr-600dhp': 'Buffalo wzr-hp-ag300h-wzr-600dhp',
		'buffalo-wzr-hp-g450h': 'buffalo-wzr-hp-g450h',
		'd-link-dir-825-rev-b1': 'd-link-dir-825-rev-b1',
		'linksys-wrt160nl': 'linksys-wrt160nl',
		'tp-link-cpe210-v1.0': 'tp-link-cpe210-v1.0',
		'tp-link-cpe220-v1.0': 'tp-link-cpe220-v1.0',
		'tp-link-cpe510-v1.0': 'tp-link-cpe510-v1.0',
		'tp-link-cpe520-v1.0': 'tp-link-cpe520-v1.0',
		'tp-link-tl-mr3020-v1': 'tp-link-tl-mr3020-v1',
		'tp-link-tl-mr3040-v1': 'tp-link-tl-mr3040-v1',
		'tp-link-tl-mr3040-v2': 'tp-link-tl-mr3040-v2',
		'tp-link-tl-mr3220-v1': 'tp-link-tl-mr3220-v1',
		'tp-link-tl-mr3420-v1': 'tp-link-tl-mr3420-v1',
		'tp-link-tl-mr3420-v2': 'tp-link-tl-mr3420-v2',
		'tp-link-tl-wa750re-v1': 'tp-link-tl-wa750re-v1',
		'tp-link-tl-wa801n-nd-v2': 'tp-link-tl-wa801n-nd-v2',
		'tp-link-tl-wa850re-v1': 'tp-link-tl-wa850re-v1',
		'tp-link-tl-wa901n-nd-v2': 'tp-link-tl-wa901n-nd-v2',
		'tp-link-tl-wdr3500-v1': 'tp-link-tl-wdr3500-v1',
		'tp-link-tl-wdr3600-v1': 'tp-link-tl-wdr3600-v1',
		'tp-link-tl-wdr4300-v1': 'tp-link-tl-wdr4300-v1',
		'tp-link-tl-wr1043n-nd-v1': 'tp-link-tl-wr1043n-nd-v1',
		'tp-link-tl-wr1043n-nd-v2': 'tp-link-tl-wr1043n-nd-v2',
		'tp-link-tl-wr703n-v1': 'tp-link-tl-wr703n-v1',
		'tp-link-tl-wr710n-v1': 'tp-link-tl-wr710n-v1',
		'tp-link-tl-wr740n-nd-v1': 'tp-link-tl-wr740n-nd-v1',
		'tp-link-tl-wr740n-nd-v3': 'tp-link-tl-wr740n-nd-v3',
		'tp-link-tl-wr740n-nd-v4': 'tp-link-tl-wr740n-nd-v4',
		'tp-link-tl-wr741n-nd-v1': 'tp-link-tl-wr741n-nd-v1',
		'tp-link-tl-wr741n-nd-v2': 'tp-link-tl-wr741n-nd-v2',
		'tp-link-tl-wr741n-nd-v4': 'tp-link-tl-wr741n-nd-v4',
		'tp-link-tl-wr841n-nd-v3': 'tp-link-tl-wr841n-nd-v3',
		'tp-link-tl-wr841n-nd-v5': 'tp-link-tl-wr841n-nd-v5',
		'tp-link-tl-wr841n-nd-v7': 'tp-link-tl-wr841n-nd-v7',
		'tp-link-tl-wr841n-nd-v8': 'tp-link-tl-wr841n-nd-v8',
		'tp-link-tl-wr841n-nd-v9': 'tp-link-tl-wr841n-nd-v9',
		'tp-link-tl-wr842n-nd-v1': 'tp-link-tl-wr842n-nd-v1',
		'tp-link-tl-wr842n-nd-v2': 'tp-link-tl-wr842n-nd-v2',
		'tp-link-tl-wr941n-nd-v2': 'tp-link-tl-wr941n-nd-v2',
		'tp-link-tl-wr941n-nd-v3': 'tp-link-tl-wr941n-nd-v3',
		'tp-link-tl-wr941n-nd-v4': 'tp-link-tl-wr941n-nd-v4',
		'ubiquiti-bullet-m': 'ubiquiti-bullet-m',
		'ubiquiti-nanostation-m': 'ubiquiti-nanostation-m',
		'ubiquiti-unifi': 'ubiquiti-unifi',
		'ubiquiti-unifiap-outdoor': 'ubiquiti-unifiap-outdoor',
	};
	var channelE = d.getElementById('channel');
	var modelE = d.getElementById('model');
	var resultE = d.getElementById('result');
	var resultLinkE = d.getElementById('result_link');
	var loadingE = d.getElementById('loading');

	var reg_channel = /<a href="(([^"]+))"/gm;
	var reg_model = /<a href="(gluon-ffks-[^-]*-([^"]+)\.bin)"/gm;
	function render(e, reg, text, label, mapping) {
		var match;
		e.innerHTML = "";
		var option = d.createElement('option');
		option.appendChild(d.createTextNode(label));
		option.value = '';
		e.appendChild(option);
		while(match = reg.exec(text)) {
			if(match[1] === '../') continue;
			console.log(match[1]);
			option = d.createElement('option');
			option.appendChild(d.createTextNode(mapping[match[2]] || match[2]));
			option.value=match[1];
			e.appendChild(option);
		}
		setLoading(0);
		e.style.display = "inline";
	}

	function setLoading(l) {
		loadingE.style.display = l ? 'inline' : 'none';
	}

	var r = new XMLHttpRequest();
	r.open("GET", "http://dl.ffks.de/images/", true);
	r.onreadystatechange = function () {
		if (r.readyState != 4 || r.status != 200) return;
		render(channelE, reg_channel, r.responseText, "Channel Wählen", channelMapping);
	};
	channelE.onchange = function() {
		if(this.value === "") {
			resultE.style.display = modelE.style.display = "none";
			return;
		}
		var r = new XMLHttpRequest();
		r.open("GET", "http://dl.ffks.de/images/" + this.value + "/factory/", true);
		r.onreadystatechange = function () {
			if (r.readyState != 4 || r.status != 200) return;
			render(modelE, reg_model, r.responseText, "Router Wählen", modelMapping);
		};
		setLoading(1);
		r.send();
	}
	modelE.onchange = function() {
		if(this.value === "") {
			resultE.style.display = "none";
			return;
		}
		resultLinkE.innerHTML = '';
		resultLinkE.href = base + channelE.value + "factory/" + modelE.value;
		resultLinkE.appendChild(d.createTextNode(resultLinkE.href));
		resultE.style.display = "block";
	}
	setLoading(1);
	r.send();
})(document)

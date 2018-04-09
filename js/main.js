$(document).ready(function() {
    var plinks = [
       	       	{
            name: 'EU god',
            plink: 'https://steamcommunity.com/groups/eug0d'
        },
		{
            name: 'white $quad',
            plink: 'https://steamcommunity.com/groups/whitesssquad'
       },
	   {
            name: 'ru$$ian god',
            plink: 'https://steamcommunity.com/groups/russianwh0'
        },
		];

    for (var i in plinks) {
        var plink = plinks[i];
        $('#marquee').append('<a href="' + plink.plink + '" target="_blank">' + plink.name + '</a>');
        var plink = $('#marquee').children('a').last();
        if (i != plinks.length - 1) {
            $('#marquee').append(' - ')
        }
    }
    $('#marquee').marquee({
        duration: 7000,
        gap: 310,
        delayBeforeStart: 0,
        direction: 'left',
        duplicated: true
    })

	window.SetVolume = function(val)
	{
    var player = document.getElementById('video');
    console.log('Before: ' + player.volume);
    player.volume = val / 100;
    console.log('After: ' + player.volume);
	}

	});
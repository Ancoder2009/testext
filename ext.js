(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
        [' ','start bumdo party with %n bumdos!','start bumdo party!']
        ]
    };

    // Register the extension
    ScratchExtensions.register('Test extension', descriptor, ext);
})({});

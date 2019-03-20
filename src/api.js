"use strict";

const getLocalMed = async (id) => {

    var script = document.createElement('script');
    script.src ="https://www.localmed.com/assets/web/js/widget.js"
    document.getElementsByTagName('head')[0].appendChild(script);
    
    let url = 'https://online-scheduling-staging.herokuapp.com/api/v1/schedule_online?share_id='+id;
    return await fetch(url)
        .then(response => response.json())
        .catch(err => {
            return err;
        })
};

export {
    getLocalMed
};

import $ from 'jquery';

$(() => {

    type returnArr = { title : string };

    const ajaxGetAPI = (callBack:any) => {
        const baseURL:string = "https://jsonplaceholder.typicode.com/photos";
        const params:object = {
            dataType : "json",
            type : "GET",
            url : baseURL
        };
        $.when( $.ajax(params) )
        .done((data) => callBack(data) )
        .fail((err) => callBack(err) );
    };

    ajaxGetAPI((data:object[] , error:string) => {
        if (error) {
            console.error(error);
            return;
        }
        documentScroll(data);
    });
    
    const scroll_countUp = (arr:Array<returnArr>, num:number) => {
        return arr.slice(0 , num).map((data , idx) => {
            $('<div>', { id:`data-${idx + 1}`, class:'list', text:data.title })
            .appendTo($('#app'));
        });
        
    };
    
    const documentScroll = (data:Array<any>) => {
        const baseLen:number = 15;

        scroll_countUp(data ,  baseLen);
        
        $(window).on('load scroll resize' , () => {
            const docHeight:number = $(document).innerHeight();
            const windowHeight:number = $(window).innerHeight();
            const pageBottom:number = docHeight - windowHeight;
            
            if( pageBottom * 0.9 <= $(window).scrollTop() ) {
                const list:number = $('.list').length;

                if ( list === data.length ) {
                    return null;
                } else {
                    $('#app').html("");
                    scroll_countUp(data ,  list + 1);
                }
            }
        })
    };  

})


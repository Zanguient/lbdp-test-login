import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
    moduleId:module.id,
    selector: 'login-cmp',
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit{
    ngOnInit(){
        function checkFullPageBackgroundImage(){
            var $page = $('.full-page');
            var image_src = $page.data('image');

            if(image_src !== undefined){
                var image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>'
                $page.append(image_container);
            }
        };

        setTimeout(function(){
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700)
    }
}

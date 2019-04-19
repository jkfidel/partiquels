import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
	title = 'app';
	myStyle: object = {};
	myParams: object = {};
	width: number = 100;
	height: number = 100;
  ngOnInit() {
        this.myStyle = {
            // 'position': 'fixed',
            'width': '100%',
            'height': '100vh',
            'z-index': -1,
            // 'top': 0,
            // 'left': 0,
            // 'right': 0,
            // 'bottom': 0,
            // 'background-image': `linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%), url(http://mourithemes.com/mason/mason/images/home/home-bg-2.jpeg)`,
            // 'background-size':'cover',
            // 'background-position':'center',
            // 'background-repeat':'no-repeat'
        };
 
    this.myParams = {
        particles: {
            number: {
                value: 75,
            },
            color: {
                value: '#fff'
            },
	        line_linked: {
	          color: '#fff',
	          opacity: 0.5
	        },
            shape: {
                type: 'circle',
            },
            size: {
            	value: '5'
            },
            opacity:{
            	value: '0.5'
            }
        }

    };
    }
}

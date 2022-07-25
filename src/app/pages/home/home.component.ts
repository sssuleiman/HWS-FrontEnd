import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
  }

  search : string="";




  
   /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          // { title: 'Card 2', cols: 1, rows: 1 },
          // { title: 'Card 3', cols: 1, rows: 1 },
          // { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'About content', cols: 2, rows: 1 },
        // { title: 'Card 2', cols: 1, rows: 1 },
        // { title: 'Card 3', cols: 1, rows: 2 },
        // { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}


  // images = [  
  //   { img: "../assets/images/laundry.jpeg" },  
  //   { img: "../assets/images/baby.jpg"},  
  //   { img: "../assets/images/garden.jpg"},  
  //   { img: "../assets/images/garden.jpg"},  
  //   { img: "../assets/images/garden.jpg"},  
  //   { img: "../assets/images/garden.jpg"},  
  //   { img: "../assets/images/garden.jpg"},  
  //   { img: "../assets/images/garden.jpg"},  
  //   { img: "../assets/images/garden.jpg"},  
  // ];  
  
  // slideConfig = {  
  //   "slidesToShow": 3,  
  //   "slidesToScroll": 3,  
  //   "dots": true,  
  //   "infinite": true  
  // };    

  // image = {
  //   img: '../assets/images/laundry.jpeg'
  // }
  imgCollection: Array<object> = [
    {
      image: '../../assets/images/laundry2.jpeg"',
      thumbImage: '../../assets/images/laundry2.jpeg"',
      alt: 'Image 1',
      title: 'Image 1'
    }, {
      image: '../../assets/images/laundry2.jpeg"',
      thumbImage: '../../assets/images/laundry2.jpeg"',
      title: 'Image 2',
      alt: 'Image 2'
    }, {
      image: '../../assets/images/garden.jpg',
      thumbImage: '../../assets/images/laundry2.jpeg"',
      title: 'Image 3',
      alt: 'Image 3'
    }, {
      imagesrc:'../../assets/images/laundry2.jpeg"',
      thumbImage: '../../assets/images/laundry2.jpeg"',
      title: 'Image 4',
      alt: 'Image 4'
    }, {
      image: '../../assets/images/laundry2.jpeg"',
      thumbImage: '../../assets/images/laundry2.jpeg"',
      title: 'Image 5',
      alt: 'Image 5'
    }, {
      image: '../../assets/images/laundry2.jpeg"',
      thumbImage: '../../assets/images/laundry2.jpeg"',
      title: 'Image 6',
      alt: 'Image 6'
    }
];


}

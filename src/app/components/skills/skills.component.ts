import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  skills=[
		{
			name: 'Web Designing',
			img: 'https://raw.githubusercontent.com/vishal-pandey/cdn/master/webd.png'
		},
		{
			name: 'Web Developement',
			img: 'https://raw.githubusercontent.com/vishal-pandey/cdn/master/webdd.png'
		},
		{
			name: 'UI / UX Design',
			img: 'https://raw.githubusercontent.com/vishal-pandey/cdn/master/ui-ux.png'
		},
		{
			name: 'Dashboard Designing',
			img: 'https://raw.githubusercontent.com/vishal-pandey/cdn/master/dashboard.png'
		},
		{
			name: 'Content Writing',
			img: 'https://raw.githubusercontent.com/vishal-pandey/cdn/master/content-writing.png'
		},
		{
			name: 'Search Engine Optimisation',
			img: 'https://raw.githubusercontent.com/vishal-pandey/cdn/master/seo.png'
		},
		{
			name: 'Portal Design',
			img: 'https://raw.githubusercontent.com/vishal-pandey/cdn/master/portal.png'
		},
		{
			name: 'E-Commerce Solutions',
			img: 'https://raw.githubusercontent.com/vishal-pandey/cdn/master/ecom.png'
		},
		{
			name: 'Business Consultancy',
			img: 'https://raw.githubusercontent.com/vishal-pandey/cdn/master/Business-Consulting.png'
		},
		{
			name: 'Domain Names',
			img: 'https://raw.githubusercontent.com/vishal-pandey/cdn/master/domain.png'
		},
		{
			name: 'Web/App Hosting Solutions',
			img: 'https://raw.githubusercontent.com/vishal-pandey/cdn/master/hosting.png'
		},
		{
			name: 'Cloud Computing',
			img: 'https://raw.githubusercontent.com/vishal-pandey/cdn/master/cloud.png'
		},
		{
			name: 'Database Support',
			img: 'https://raw.githubusercontent.com/vishal-pandey/cdn/master/database.png'
		},
		{
			name: 'Android App Development',
			img: 'https://raw.githubusercontent.com/vishal-pandey/cdn/master/android.png'
		},
		{
			name: 'IOS App Development',
			img: 'https://raw.githubusercontent.com/vishal-pandey/cdn/master/ios.png'
		},
		{
			name: 'Windows App Development',
			img: 'https://raw.githubusercontent.com/vishal-pandey/cdn/master/windows.png'
		},
		{
			name: 'Mac OS App Development',
			img: 'https://raw.githubusercontent.com/vishal-pandey/cdn/master/mac.png'
		},
		{
			name: 'IOT Based Solutions',
			img: 'https://raw.githubusercontent.com/vishal-pandey/cdn/master/iot.png'
		}
	]

}

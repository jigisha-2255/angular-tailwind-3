import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { MainLayoutService } from '../main-layout.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
	public chart: any;
	constructor(public layoutService: MainLayoutService) { }
	saasTables = [
		{
			id: 1,
			authorImg: 'assets/overview-1.jpg',
			authorName: 'Guy Hawkins',
			authorSkills: 'Haiti',
			conv: '78.34%',
			color: '#009ef7',
		},
		{
			id: 2,
			authorImg: 'assets/overview-2.jpg',
			authorName: 'Jane Cooper',
			authorSkills: 'Monaco',
			conv: '63.83%',
			color: '#F1416c',
		},
		{
			id: 3,
			authorImg: 'assets/overview-3.jpg',
			authorName: 'Jacob Jones',
			authorSkills: 'Poland',
			conv: '92.56%',
			color: '#50CD89',
		},
		{
			id: 4,
			authorImg: 'assets/overview-4.jpg',
			authorName: 'Cody Fishers',
			authorSkills: 'Mexico',
			conv: '63.08%',
			color: '#FFc700',
		}
	]
	cryptoTables = [
		{
			id: 1,
			authorImg: 'assets/overview-1.jpg',
			authorName: 'Brooklyn Simmons',
			authorSkills: 'Poland',
			conv: '85.23%',
			color: '#009ef7',
		},
		{
			id: 2,
			authorImg: 'assets/overview-2.jpg',
			authorName: 'Esther Howard',
			authorSkills: 'Mexico',
			conv: '74.83%',
			color: '#F1416c',
		},
		{
			id: 3,
			authorImg: 'assets/overview-3.jpg',
			authorName: 'Annette Black',
			authorSkills: 'Haiti',
			conv: '90.06%',
			color: '#50CD89',
		},
		{
			id: 4,
			authorImg: 'assets/overview-4.jpg',
			authorName: 'Marvin McKinney',
			authorSkills: 'Monaco',
			conv: '54.08%',
			color: '#FFc700',
		}
	]
	socialTables = [
		{
			id: 1,
			authorImg: 'assets/overview-1.jpg',
			authorName: 'Jacob Jones',
			authorSkills: 'New York',
			conv: '52.34%',
			color: '#009ef7',
		},
		{
			id: 2,
			authorImg: 'assets/overview-2.jpg',
			authorName: 'Ronald Richards',
			authorSkills: 'Madrid',
			conv: '77.65%',
			color: '#F1416c',
		},
		{
			id: 3,
			authorImg: 'assets/overview-3.jpg',
			authorName: 'Leslie Alexander',
			authorSkills: 'Pune',
			conv: '82.47%',
			color: '#50CD89',
		},
		{
			id: 4,
			authorImg: 'assets/overview-4.jpg',
			authorName: 'Courtney Henry',
			authorSkills: 'Mexico',
			conv: '67.84%',
			color: '#FFc700',
		}
	]
	mobileTables = [
		{
			id: 1,
			authorImg: 'assets/overview-1.jpg',
			authorName: 'Arlene McCoy',
			authorSkills: 'London',
			conv: '53.44%',
			color: '#009ef7',
		},
		{
			id: 2,
			authorImg: 'assets/overview-2.jpg',
			authorName: 'Marvin McKinneyr',
			authorSkills: 'Monaco',
			conv: '74.64%',
			color: '#F1416c',
		},
		{
			id: 3,
			authorImg: 'assets/overview-3.jpg',
			authorName: 'Jacob Jones',
			authorSkills: 'PManila',
			conv: '88.56%',
			color: '#50CD89',
		},
		{
			id: 4,
			authorImg: 'assets/overview-4.jpg',
			authorName: 'Esther Howard',
			authorSkills: 'Iceland',
			conv: '63.16%',
			color: '#FFc700',
		}
	]
	othersTables = [
		{
			id: 1,
			authorImg: 'assets/overview-1.jpg',
			authorName: 'Jane Copper',
			authorSkills: 'Haiti',
			conv: '68.54%',
			color: '#009ef7',
		},
		{
			id: 2,
			authorImg: 'assets/overview-2.jpg',
			authorName: 'Esther Howard',
			authorSkills: 'Kiribati',
			conv: '55.83%',
			color: '#F1416c',
		},
		{
			id: 3,
			authorImg: 'assets/overview-3.jpg',
			authorName: 'Jacob Jones',
			authorSkills: 'Poland',
			conv: '93.46%',
			color: '#50CD89',
		},
		{
			id: 4,
			authorImg: 'assets/overview-4.jpg',
			authorName: 'Ralph Edwards',
			authorSkills: 'Mexico',
			conv: '64.48%',
			color: '#FFc700',
		}
	]
	statsTables = [
		{
			id: 1,
			itemImg: 'assets/overview-1.jpg',
			itemName: 'Mivy App',
			itemTitle: 'Jane Cooper',
			budget: '$32,400',
			profit: 'yes',
			progress: '9.2%',
			status: 'In Process',
			color: '#009ef7',
		},
		{
			id: 2,
			itemImg: 'assets/overview-2-1.jpg',
			itemName: 'Avionica',
			itemTitle: 'Esther Howard',
			budget: '$256,910',
			profit: 'no',
			progress: '0.4%',
			status: 'On Hold',
			color: '#009ef7',
		},
		{
			id: 3,
			itemImg: 'assets/overview-2-2.jpg',
			itemName: 'Charto CRM',
			itemTitle: 'Jenny Wilson',
			budget: '$8,220',
			profit: 'yes',
			progress: '9.2%',
			status: 'In Process',
			color: '#009ef7',
		},
		{
			id: 4,
			itemImg: 'assets/overview-3.jpg',
			itemName: 'Tower Hill',
			itemTitle: 'Cody Fisher',
			budget: '$8,220',
			profit: 'yes',
			progress: '9.2%',
			status: 'Completed',
			color: '#009ef7',
		},
		{
			id: 5,
			itemImg: 'assets/overview-4.jpg',
			itemName: '9 Degree',
			itemTitle: 'Savannah Nguyen',
			budget: '$183,300',
			profit: 'no',
			progress: '0.4%',
			status: 'In Process',
			color: '#009ef7',
		}
	]
	ngOnInit(): void {
		this.createChart();
	}
	openTab: number = 1;
	openTabName!: string;
	toggleTabs($tabNumber: number, name: string) {
		this.openTab = $tabNumber;
		this.openTabName = name;
	}
	createChart() {

		this.chart = new Chart("MyChart", {
			type: 'line', //this denotes tha type of chart

			data: {// values on X-Axis
				labels: ['9 AM', '12 PM', '15 PM', '18 PM',
					'19 PM'],
				datasets: [
					{
						label: "Sales",
						data: ['90', '110', '110', '95', '95',
							'85', '85', '95', '95', '115', '115', '100', '100', '115', '115', '95', '95', '85'],
						backgroundColor: 'blue'
					},
					{
						label: "Profit",
						data: ['65', '80', '80', '60', '60', '45',
							'45', '80', '80', '70', '70', '90', '90', '80', '80', '80', '60', '60'],
						backgroundColor: 'limegreen'
					}
				]
			},
			options: {
				aspectRatio: 2
			}

		});
	}
	chartOptions = {
		animationEnabled: true,
		exportEnabled: true,
		title: {
			// text: "World Population Growth Rate",
			fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
			fontWeight: "bold"
		},
		axisX: {
			valueFormatString: "MM/YYYY",
		},
		axisY: {
			title: "Annual Population Growth (in %)",
			valueFormatString: "#,###.##'%'"
		},
		data: [{
			type: "spline",
			xValueFormatString: "YYYY",
			yValueFormatString: "#,###.##'%'",
			dataPoints: [
				{ x: new Date(1961, 1, 1), y: 1.30072410817561 },
				{ x: new Date(1962, 2, 1), y: 1.7243462047616 },
				{ x: new Date(1963, 2, 1), y: 2.08332248580949 },
				{ x: new Date(1964, 0, 1), y: 2.05319982551457 },
				{ x: new Date(1965, 2, 1), y: 2.05524143402917 },
				{ x: new Date(1966, 0, 1), y: 2.10866788828604 },
				{ x: new Date(1967, 0, 1), y: 2.04952806653054 },
				{ x: new Date(1968, 0, 1), y: 2.0557795099968 },
				{ x: new Date(1969, 0, 1), y: 2.08817694565934 },
				{ x: new Date(1970, 0, 1), y: 2.09125276275897 },
				{ x: new Date(1971, 0, 1), y: 2.13311686340344 },
				{ x: new Date(1972, 0, 1), y: 2.03121137162374 },
				{ x: new Date(1973, 0, 1), y: 1.98294336877748 },
				{ x: new Date(1974, 0, 1), y: 1.92954936287425 },
				{ x: new Date(1975, 0, 1), y: 1.8558336723775 },
				{ x: new Date(1976, 0, 1), y: 1.79507967654773 },
				{ x: new Date(1977, 0, 1), y: 1.74961533313858 },
				{ x: new Date(1978, 0, 1), y: 1.74802018504161 },
				{ x: new Date(1979, 0, 1), y: 1.7620417897177 },
				{ x: new Date(1980, 0, 1), y: 1.74866104222924 },
				{ x: new Date(1981, 0, 1), y: 1.76406767844979 },
				{ x: new Date(1982, 0, 1), y: 1.80049048590014 },
				{ x: new Date(1983, 0, 1), y: 1.78432403887979 },
				{ x: new Date(1984, 0, 1), y: 1.74712530080474 },
				{ x: new Date(1985, 0, 1), y: 1.74895086012958 },
				{ x: new Date(1986, 0, 1), y: 1.76830078138659 },
				{ x: new Date(1987, 0, 1), y: 1.78300118456379 },
				{ x: new Date(1988, 0, 1), y: 1.77018316822685 },
				{ x: new Date(1989, 0, 1), y: 1.73856862522462 },
				{ x: new Date(1990, 0, 1), y: 1.73544185116863 },
				{ x: new Date(1991, 0, 1), y: 1.66842050994094 },
				{ x: new Date(1992, 0, 1), y: 1.57292819054604 },
				{ x: new Date(1993, 0, 1), y: 1.56456504240188 },
				{ x: new Date(1994, 0, 1), y: 1.52044016094899 },
				{ x: new Date(1995, 0, 1), y: 1.50599110708553 },
				{ x: new Date(1996, 0, 1), y: 1.45269465711498 },
				{ x: new Date(1997, 0, 1), y: 1.427219157415 },
				{ x: new Date(1998, 0, 1), y: 1.39160819986147 },
				{ x: new Date(1999, 0, 1), y: 1.35179096679923 },
				{ x: new Date(2000, 0, 1), y: 1.32307577883421 },
				{ x: new Date(2001, 0, 1), y: 1.2975934295266 },
				{ x: new Date(2002, 0, 1), y: 1.27680831188725 },
				{ x: new Date(2003, 0, 1), y: 1.26147763010064 },
				{ x: new Date(2004, 0, 1), y: 1.25426340053367 },
				{ x: new Date(2005, 0, 1), y: 1.24692384480321 },
				{ x: new Date(2006, 0, 1), y: 1.24369497414078 },
				{ x: new Date(2007, 0, 1), y: 1.23574121285958 },
				{ x: new Date(2008, 0, 1), y: 1.24085406678891 },
				{ x: new Date(2009, 0, 1), y: 1.22174269013 },
				{ x: new Date(2010, 0, 1), y: 1.20333276891564 },
				{ x: new Date(2011, 0, 1), y: 1.17025832977265 },
				{ x: new Date(2012, 0, 1), y: 1.18393451235548 },
				{ x: new Date(2013, 0, 1), y: 1.18384476275419 },
				{ x: new Date(2014, 0, 1), y: 1.18021596062547 },
				{ x: new Date(2015, 0, 1), y: 1.16873977624677 },
				{ x: new Date(2016, 0, 1), y: 1.16374431044332 },
				{ x: new Date(2017, 0, 1), y: 1.14385698082209 },
				{ x: new Date(2018, 0, 1), y: 1.10615060940842 },
				{ x: new Date(2019, 0, 1), y: 1.06513053318513 },
				{ x: new Date(2020, 0, 1), y: 1.03599084817998 }
			]
		}]
	}
	chartOptions2 = {
		// theme: "dark2",
		animationEnabled: true,
		title: {
			// text: "Performance Overview"
		},
		axisX: {
			// title:"Life Expectancy (in Years)"
		},
		axisY: {
			// title:"Fertility Rate",
			includeZero: true
		},
		legend: {
			horizontalAlign: "right",
			dockInsidePlotArea: true
		},
		data: [{
			type: "bubble",
			zValueFormatString: "##.##",
			showInLegend: true,
			legendText: "Size of Bubble Represents Population in Millions",
			legendMarkerType: "circle",
			legendMarkerColor: "grey",
			toolTipContent: "<b><span style='\"'color: {color};'\"'>{name}</span></b><br/>Life Exp: {x} yrs<br/> Fertility Rate: {y}<br/> Population: {z}mn",
			dataPoints: [
				{ x: 64.833, y: 4.321, z: 38.041757, name: "Afghanistan" },
				{ x: 82.9, y: 1.657, z: 25.365745, name: "Australia" },
				{ x: 75.881, y: 1.719, z: 211.049519, name: "Brazil" },
				{ x: 82.04878049, y: 1.4684, z: 37.593384, name: "Canada" },
				// { x: 76.912, y: 1.696, z: 1397.715, name: "People's Republic of China" },
				// { x: 80.94146341, y: 1.54, z: 83.019213, name: "Germany" },
				// { x: 71.99, y: 3.28, z: 100.388076, name: "Egypt" },
				// { x: 83.48536585, y: 1.24, z: 46.93706, name: "Spain" },
				// { x: 82.57804878, y: 1.87, z: 67.012883, name: "France" },
				// { x: 81.20487805, y: 1.65, z: 66.647112, name: "United Kingdom" },
				// { x: 69.656, y: 2.202, z: 1366.417756, name: "India" },
				// { x: 70.604, y: 3.597, z: 39.309789, name: "Iraq" },
				// { x: 83.19756098, y: 1.27, z: 60.359546, name: "Italy" },
				// { x: 84.35634146, y: 1.36, z: 126.264931, name: "Japan" },
				// { x: 66.699, y: 3.423, z: 52.573967, name: "Kenya" },
				// { x: 75.054, y: 2.103, z: 127.575529, name: "Mexico" },
				// { x: 77.15, y: 1.514, z: 69.625581, name: "Thailand" },
				// { x: 78.78780488, y: 1.705, z: 328.239523, name: "United States of America" },
				// { x: 64.131, y: 2.381, z: 58.558267, name: "South Africa" }
			]
		}]
	}
}                        

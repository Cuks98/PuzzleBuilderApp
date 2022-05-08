import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  samoKolegeTekst: string = `
  Lorem ipsum dolor, sit amet consectetur 
  adipisicing elit. Ipsum soluta nam obcaecati 
  quibusdam nemo sed! Nemo officia placeat 
  cumque quod. Inventore, eius numquam fugiat 
  ea doloremque, possimus voluptates dolore 
  suscipit nostrum dolorem aliquam aperiam 
  laboriosam. Minus quas saepe quae natus 
  alias repellat, aliquam, mollitia dolorum 
  facere laborum consectetur voluptas quidem.`
  mc2tekst: string = 
  `Lorem ipsum dolor sit amet consectetur 
  adipisicing elit. Est, numquam earum unde 
  voluptate vitae autem amet recusandae dolore 
  accusamus ea! Numquam atque omnis aliquid 
  consequuntur excepturi aspernatur, unde dolore 
  consectetur at, laborum laboriosam quibusdam 
  odio debitis ab illum qui mollitia molestias 
  alias dolorem sit amet eaque! Sit aspernatur 
  hic esse.`;
  cstekst: string = `CS Computer Systems was established on 1 September 1989 which makes us one of the long lasting IT companies in the region. The company was founded by Mr. Stjepan and Mrs. Biserka Šipek. Stjepan Šipek, electrical engineering expert with IT knowledge, has acquired work experience in some of the IT industry giants of the former Yugoslavia, such as Iskra Delta. Since its very beginnings, our company has been built by placing the knowledge and skills ahead of the conventional trade in IT goods. In our 30 years of work, CS has built its position among the leading system integrators on our market. With 120 employees, our annual income is approximately 140 million Kuna. We were one of the first Croatian companies that had its operations harmonized and certified according to ISO 9001 standard. In 2006, we became the first Croatian company with the widest recognized Information Security Management certificate in the world, ISO27001. Our list of reference projects and customers is a source of our great pride and our commitment for the future. CS Computer Systems is currently a modern and stable company providing integrated IT services and covering practically all aspects of IT technology and our customers’ operations. We at CS Computer Systems primarily make effort to understand the business needs of our customers and to propose them business and/or technology solutions facilitating and improving their basic operations.`

  constructor() { }

  ngOnInit(): void {
  }

}

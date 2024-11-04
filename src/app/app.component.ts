import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CpsTreeTableComponent } from 'cps-ui-kit';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CpsTreeTableComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  columns = [
    { field: 'name', header: 'Name' },
    { field: 'descr', header: 'Description' },
    { field: 'type', header: 'Data type' },
    { field: 'default', header: 'Default' },
    { field: 'nullable', header: 'Nullable' },
  ];

  attributes = [
    {
      data: {
        name: 'SAMPLE_STRING',
        descr: '-',
        type: 'integer',
        permissibleVals: '-',
        default: '-',
        nullable: true,
        unique: false,
        dq: '-',
        kris: '-',
        controls: '-',
      },
    },
    {
      data: {
        name: 'SAMPLE_STRING',
        descr: '-',
        type: 'long',
        permissibleVals: '-',
        default: '-',
        nullable: true,
        unique: false,
        dq: '-',
        kris: '-',
        controls: '-',
      },
    },
  ];

  dataVirtual: any[] = [];

  colsVirtual = [
    { field: 'name', header: 'Name' },
    { field: 'size', header: 'Size' },
    { field: 'tag', header: 'Tag' },
    { field: 'type', header: 'String (only 5 distinct values)' },
    { field: 'date', header: 'Date', dateFormat: 'dd. MM. yyyy' },
    { field: 'sizeEven', header: 'Boolean' },
    {
      field: 'date2',
      header: 'Date but with category filter',
      filterType: 'category',
      dateFormat: 'yyyy/MM/dd HH:mm:ss',
    },
  ];

  ngOnInit(): void {
    this._genVirtualData();
  }

  private _genVirtualData() {
    for (let i = 0; i <= 1000; i++) {
      this.dataVirtual.push({
        data: {
          name: `Folder${i}`,
          size: i,
          tag: i * 3,
          type: `Type-${i % 5}`,
          date: new Date(2020, 1, i),
          sizeEven: i % 2 === 0,
          date2: new Date(2020, 1, i, 12, 30, 0),
        },
        children: [
          {
            data: {
              name: 'primefaces.mkv',
              size: 1000,
              tag: 7,
              type: `Type-${i % 5}`,
              date: new Date(2020, 1, i),
              sizeEven: i % 2 === 0,
              date2: new Date(2020, 1, i, 12, 30, 0),
            },
          },
          {
            data: {
              name: 'intro.avi',
              size: 500,
              tag: 9,
              type: `Type-${i % 5}`,
              date: new Date(2020, 1, i),
              sizeEven: i % 2 === 0,
              date2: new Date(2020, 1, i, 12, 30, 0),
            },
          },
        ],
      });
    }
  }
}

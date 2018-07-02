import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface DishTableItem {
  name: string;
  id: number;
  price?: number;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: DishTableItem[] = [
  {id: 1, name: 'Poulet roti aux citrons confits et aux olives vertes.', price: 8.5, },
  {id: 2, name: 'Couscous aux 7 légumes.', price: 11.5, },
  {id: 3, name: 'Batbouts farcis au thon', price: 20, },
  {id: 4, name: 'Tajine de keftas aux œufs.', price: 11.5, },
  {id: 5, name: 'Rfissa au poulet beldi.', price: 10, },
  {id: 6, name: 'Pastilla au poisson et aux fruits de mer.', price: 12, },
  {id: 7, name: 'Mrouzia à l\'agneau et aux raisins secs.', price: 13, },
  {id: 8, name: 'Marka de boeuf aux carottes et pomme de terre.', price: 12.5, },
  {id: 9, name: 'Boulettes de merlans', price: 11.5, },
  {id: 10, name: 'Harira aux pois chiches', price: 10.5, },
  {id: 11, name: 'Sardine avec chermoula', price: 9, },
  {id: 12, name: 'Mechoui : Agneau farci', price: 8.7, },
  {id: 13, name: 'Tajine de poisson', price: 10.99, },
  {id: 14, name: 'Keftas marocaines aux pommes de terre et piment', price: 11.5, },
  {id: 15, name: 'Baklavas marocains légers aux pistaches', price: 16.5, },
  {id: 16, name: 'Berkoukes au poulet', price: 17.5, },
  {id: 17, name: 'Tangia marrakchia', price: 11.8, },
  {id: 18, name: 'Zaalouk', price: 11.8, },
  {id: 19, name: 'Hargma ou pieds de veau aux pois chiches et raisin', price: 11.7, },
  {id: 20, name: 'Tajine de veau aux petits pois et pommes de terre', price: 11.9, },
];

/**
 * Data source for the DishTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class DishTableDataSource extends DataSource<DishTableItem> {
  data: DishTableItem[] = EXAMPLE_DATA;

  constructor(private paginator: MatPaginator, private sort: MatSort) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<DishTableItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginators length
    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: DishTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: DishTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        case 'price': return compare(a.price, b.price, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

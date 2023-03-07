import { mdiGoogleAnalytics } from '@mdi/js';
import { mdiTable } from '@mdi/js';

const Menu = {
  links: [
    {
      "name": "Business Intelligence",
      "link": "/",
      "icon": mdiGoogleAnalytics
    },
    {
      "name": "Business Insights",
      "link": "/business-insights",
      "icon": mdiTable
    }
  ],
  merchant_spring_links: [
    {
      "name": "Channel Overview",
      "link": "/"
    },
    {
      "name": "Traffic and Conversion",
      "link": "/traffic-and-conversion"
    },
    {
      "name": "Sales Insights",
      "subLinks": [
        {
          "name": "Sales by category",
          "link": "/sales-by-category"
        },
        {
          "name": "Sales by brand",
          "link": "/sales-by-brand"
        },
        {
          "name": "Sales by group",
          "link": "/sales-by-group"
        },
        {
          "name": "Sales by product",
          "link": "/sales-by-product"
        },
        {
          "name": "Sales by parent",
          "link": "/sales-by-parent"
        },
        {
          "name": "Top sellers",
          "link": "/top-sellers"
        },
        {
          "name": "Worst sellers",
          "link": "/worst-sellers"
        }
      ]
    },
    {
      "name": "Profitability",
      "subLinks": [
        {
          "name": "Channel profit",
          "link": "/channel-profit"
        },
        {
          "name": "Product profit",
          "link": "/product-profit"
        }
      ]
    },
    {
      "name": "Channel Listings",
      "subLinks": [
        {
          "name": "Suppressed products",
          "link": "/suppressed-products"
        }
      ]
    },
    {
      "name": "Marketing",
      "subLinks": [
        {
          "name": "Overview",
          "link": "/marketing-overview"
        },
        {
          "name": "Campaigns",
          "link": "/marketing-campaigns"
        },
        {
          "name": "Ad Groups",
          "link": "/marketing-ad-groups"
        },
        {
          "name": "Porduct",
          "link": "/marketing-product"
        },
        {
          "name": "Keywords",
          "link": "/marketing-keywords"
        }
      ]
    }
  ]
}

export default Menu;
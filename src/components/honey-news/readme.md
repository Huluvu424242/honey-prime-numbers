# honey-prime-numbers

<!-- Auto Generated Below -->


## Properties

| Property             | Attribute        | Description                     | Type                        | Default     |
| -------------------- | ---------------- | ------------------------------- | --------------------------- | ----------- |
| `feedAdministration` | --               | Feeds Administration Komponente | `HTMLHoneyNewsFeedsElement` | `undefined` |
| `localBasePath`      | `local-basepath` | base of local site              | `any`                       | `undefined` |
| `newsFeed`           | --               | News reader Komponente          | `HTMLHoneyNewsFeedElement`  | `undefined` |
| `siteBasePath`       | `site-basepath`  | base of remote site             | `any`                       | `undefined` |
| `verbose`            | `verbose`        | enable console logging          | `boolean`                   | `false`     |


## Dependencies

### Depends on

- [honey-prime-numbers-header](header)
- [honey-prime-numbers-feed](news)
- [honey-prime-numbers-feeds](feeds)
- [honey-prime-numbers-statistic](statistic)

### Graph
```mermaid
graph TD;
  honey-prime-numbers --> honey-prime-numbers-header
  honey-prime-numbers --> honey-prime-numbers-feed
  honey-prime-numbers --> honey-prime-numbers-feeds
  honey-prime-numbers --> honey-prime-numbers-statistic
  style honey-prime-numbers fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)* by Huluvu424242

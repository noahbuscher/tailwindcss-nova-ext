'use strict'

const FUNCTIONS    = require('./functions.js')
const { ListItem } = require('./list_item.js')

exports.List = class List {
  constructor(version, config) {
    this._config      = config
    this._version     = version
    this._definitions = config.definitions
    this._items       = []
  }

  async loadDefinitions() {
    this._definitions.forEach(definitionFile => {
      let twClasses = definitionFile.twClasses(this._config)

      for (const [categoryName, categoryClasses] of Object.entries(twClasses)) {
        let categoryItem = new ListItem(FUNCTIONS.camelCaseToUpperCase(categoryName))

        categoryItem.collapsibleState = TreeItemCollapsibleState.Collapsed
        categoryItem.image            = 'sidebar-category'

        for (const [subCategoryName, subCategory] of Object.entries(categoryClasses)) {
          let subCategoryItem = new ListItem(FUNCTIONS.camelCaseToTitleCase(subCategoryName))

          subCategoryItem.collapsibleState = TreeItemCollapsibleState.Collapsed
          subCategoryItem.image            = 'sidebar-subcategory'
          subCategoryItem.urlName          = subCategoryName

          categoryItem.children.push(subCategoryItem)

          subCategory.forEach(utilityClass => {
            let utilityClassItem = new ListItem(utilityClass.label)

            if (utilityClass.color !== undefined) {
              utilityClassItem.color = utilityClass.color
            } else {
              utilityClassItem.image = '__symbol.style-class'
            }

            utilityClassItem.descriptiveText = utilityClass.detail
            utilityClassItem.tooltip         = utilityClass.documentation
            utilityClassItem.urlName         = subCategoryName

            subCategoryItem.children.push(utilityClassItem)
          })
        }

        this._items = [...this._items, categoryItem]
      }
    })

    return
  }

  get items() {
    return this._items
  }
}

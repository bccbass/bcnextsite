import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {sectionType} from './sectionType'
import {projectType} from './projectType'
import websiteType from './websiteType'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, postType, sectionType, websiteType, projectType],
}

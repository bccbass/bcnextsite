import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Website Content')
    .items([
      // Singleton: Website Settings (hides "Create New" button)
			S.listItem().title("Website Settings").child(
				S.document().schemaType("website").documentId("website") // Forces a single document
			),
			S.divider(),
      S.documentTypeListItem('section').title('Main Sections'),
      S.documentTypeListItem('project').title('Individual Projects'),
      S.documentTypeListItem('post').title('Posts'),
      S.documentTypeListItem('category').title('Categories'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['post', 'category','section','project', 'website'].includes(item.getId()!),
      ),
    ])

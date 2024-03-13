# api/models/publication.py

from api.utils.database import get_database_connection

class Publication:
    """Publication model."""

    def __init__(self, title, authors, publication_date, abstract, keywords, doi, doi_link, pdf_link, _id=None):
        self._id = _id
        self.title = title
        self.authors = authors
        self.publication_date = publication_date
        self.abstract = abstract
        self.keywords = keywords
        self.doi = doi
        self.doi_link = doi_link
        self.pdf_link = pdf_link

    def save(self):
        """Save the publication to the database."""
        connection = get_database_connection()
        connection.publications.insert_one({
            'title': self.title,
            'authors': self.authors,
            'publication_date': self.publication_date,
            'abstract': self.abstract,
            'keywords': self.keywords,
            'doi': self.doi,
            'doi_link': self.doi_link,
            'pdf_link': self.pdf_link
        })

    @staticmethod
    def find_by_title(title):
        """Find a publication by title."""
        connection = get_database_connection()
        publication_data = connection.publications.find_one({'title': title})
        if publication_data:
            return Publication(
                title=publication_data['title'],
                authors=publication_data['authors'],
                publication_date=publication_data['publication_date'],
                abstract=publication_data['abstract'],
                keywords=publication_data['keywords'],
                doi=publication_data['doi'],
                doi_link=publication_data['doi_link'],
                pdf_link=publication_data['pdf_link']
            )
        else:
            return None

    @staticmethod
    def find_by_id(publication_id):
        """Find a publication by ID."""
        connection = get_database_connection()
        publication_data = connection.publications.find_one({'_id': publication_id})
        if publication_data:
            return Publication(
                title=publication_data['title'],
                authors=publication_data['authors'],
                publication_date=publication_data['publication_date'],
                abstract=publication_data['abstract'],
                keywords=publication_data['keywords'],
                doi=publication_data['doi'],
                doi_link=publication_data['doi_link'],
                pdf_link=publication_data['pdf_link']
            )
        else:
            return None



from sqlalchemy import create_engine, Column, Integer, String, Text, Enum, CHAR
from sqlalchemy.orm import declarative_base, sessionmaker, scoped_session
import os
# Define Base

Base = declarative_base()

class Job(Base):
    __tablename__ = 'jobs'

    id = Column(CHAR(36), primary_key=True)
    title = Column(String(255))
    location = Column(Text)
    description = Column(Text)
    salary = Column(String(45))
    posted_date = Column(String(45))
    source = Column(String(45))
    url = Column(String(255), nullable=False)
    status = Column(Enum('Open', 'Closed', 'Unknown'), nullable=False)
    internal_id = Column(String(255), nullable=False)
    company_id = Column(CHAR(36), nullable=False)
    job_category_id = Column(Integer, nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'location': self.location,
            'description': self.description,
            'salary': self.salary,
            'posted_date': self.posted_date,
            'source': self.source,
            'url': self.url,
            'status': self.status,
            'internal_id': self.internal_id,
            'company_id': self.company_id,
            'job_category_id': self.job_category_id,
        }
        
    @staticmethod
    def build_engine():
        DATABASE_URL = os.environ["DATABASE_URL"]
        engine = create_engine(DATABASE_URL, echo=True)
        SessionFactory = sessionmaker(bind=engine)
        
        return SessionFactory
        

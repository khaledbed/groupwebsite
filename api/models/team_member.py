# api/models/team_member.py

from api.utils.database import get_database_connection

class TeamMember:
    """Team Member model."""

    def __init__(self, name, position, email, bio, _id=None):
        self._id = _id
        self.name = name
        self.position = position
        self.email = email
        self.bio = bio

    def save(self):
        """Save the team member to the database."""
        connection = get_database_connection()
        connection.team_members.insert_one({
            'name': self.name,
            'position': self.position,
            'email': self.email,
            'bio': self.bio
        })

    @staticmethod
    def find_by_name(name):
        """Find a team member by name."""
        connection = get_database_connection()
        team_member_data = connection.team_members.find_one({'name': name})
        if team_member_data:
            return TeamMember(
                name=team_member_data['name'],
                position=team_member_data['position'],
                email=team_member_data['email'],
                bio=team_member_data['bio']
            )
        else:
            return None

    @staticmethod
    def find_by_id(team_member_id):
        """Find a team member by ID."""
        connection = get_database_connection()
        team_member_data = connection.team_members.find_one({'_id': team_member_id})
        if team_member_data:
            return TeamMember(
                name=team_member_data['name'],
                position=team_member_data['position'],
                email=team_member_data['email'],
                bio=team_member_data['bio']
            )
        else:
            return None


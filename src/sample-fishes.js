// This is just some sample data so you don't have to think of your own!
module.exports = {
    projects: [{
        name: null,
        summary: 'A platform for citizens to acces Government schemes on a single platform',
        desc: 'A platform for citizens to acces Government schemes on a single platform. Where they can fill and track their applications using their Aadhar authentication. This system also helps Governemt to make better policies using data recorded.',
        initiator: {
            id: '12343495834',
            name: 'Ashique'
            // photoId: 'https://scontent.fblr1-1.fna.fbcdn.net/v/t1.0-9/14370006_1314403258599808_6975450530949412410_n.jpg?oh=5d359843086b494771d540543a888c05&oe=59BFB7C7'
        }, // User ID
        status: 'available',
        skillsReq: ['backend', 'html', 'css'],
        suggestedStartingDate: '2017-05-07',
        suggestedDeadline: '2017-06-07',
        participants: {'1247384384':['django', 'html', 'js'], '127824638293': ['css', 'design']}
    },
    {
        name: 'GetWorking',
        summary: 'A platform where people can share ideas and start collaborating in projects',
        desc: 'Create a web application to manage micro communities like FCC Study Group and integrate custom maps into for mapping all the people in it with their respective skills and work, just the way Priya did on Google Maps',
        initiator: {
            id: '12343495834',
            name: 'Utkarsh Bhimte',
            photoId: 'https://scontent.fblr1-1.fna.fbcdn.net/v/t1.0-9/14370006_1314403258599808_6975450530949412410_n.jpg?oh=5d359843086b494771d540543a888c05&oe=59BFB7C7'
        }, // User ID
        status: 'available',
        skillsReq: ['backend', 'html', 'css'],
        suggestedStartingDate: '2017-05-07',
        suggestedDeadline: '2017-06-07',
        participants: {'1247384384':['django', 'html', 'js'], '127824638293': ['css', 'design']}
    },
    {
        name: 'FCC Community Website',
        summary: 'A web application to manage micro communities like FCC Study Group',
        desc: 'Create a web application to manage micro communities like FCC Study Group and integrate custom maps into for mapping all the people in it with their respective skills and work, just the way Priya did on Google Maps',
        initiator: {
            id: '12343495834',
            name: 'Utkarsh Bhimte',
            photoId: 'https://scontent.fblr1-1.fna.fbcdn.net/v/t1.0-9/14370006_1314403258599808_6975450530949412410_n.jpg?oh=5d359843086b494771d540543a888c05&oe=59BFB7C7'
        }, // User ID
        status: 'available',
        skillsReq: ['backend', 'html', 'css'],
        suggestedStartingDate: '2017-05-07',
        suggestedDeadline: '2017-06-07',
        participants: {'1247384384':['django', 'html', 'js'], '127824638293': ['css', 'design']}
    }],
    users: {
        '12343495834': {
            name: 'Utkarsh Bhimte',
            image: '',
            github: '',
            portfolio: '',
            contact: '',
            DOB: '10-09-1995',
            skills: ['front-end', 'html', 'js']
        },
        '1247384384': {
            name: 'Sidharth Kumar',
            image: 'https://scontent-sit4-1.xx.fbcdn.net/v/t1.0-9/13335899_1000181456704491_5204174791904611076_n.jpg?oh=f3980331628669652acc626202d3d07a&oe=5975EE2B',
            github: '',
            portfolio: '',
            contact: '',
            DOB: '13-03-1996',
            skills: ['django', 'html', 'js']
        },
        '127824638293': {
            name: 'Saojanya Nagpal',
            image: 'https://scontent-sit4-1.xx.fbcdn.net/v/t1.0-9/15894514_1889762547920534_3231168312415608458_n.jpg?oh=c8343e25f44d21222e83086776923cd7&oe=59C01A81',
            github: '',
            portfolio: '',
            contact: '',
            DOB: '17-01-1996',
            skills: ['nodejs', 'html', 'css']
        },
    }
};

const admin = require('firebase-admin');
admin.initializeApp();

const db = admin.firestore();

const populateDummyData = async () => {
    const userRef = db.collection("users").doc("dummy-user");
    const sectionRef = db.collection("sections").doc("dummy-section");
    const contentRef = db.collection("sectionContents").doc("dummy-content");

    try {
        await userRef.set(Object.assign({}, dummyUser, {sections: [sectionRef.id]} ));
        await sectionRef.set(Object.assign({}, dummySection, {userId: userRef.id, contents: [contentRef.id]}));
        await contentRef.set(Object.assign({}, dummyContent, { userId: userRef.id, sectionId: sectionRef.id}));
    }
    catch (e) {
        console.log(e);
    }
};

const dummyUser = {
    displayName: "John Smith",
    profileImg: "",
    tagline: "University of Melbourne",
    about: "I'm a student at the university of melbourne",
    sections: []
}

const dummySection = {
    title: "Projects",
    contents: []
}

const dummyContent = {
    title: "My Awesome Project",
    thumbnailImg: "",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque viverra justo nec ultrices. Penatibus et magnis dis parturient montes nascetur. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Pulvinar proin gravida hendrerit lectus a. Arcu non odio euismod lacinia at. Gravida cum sociis natoque penatibus et magnis dis. Sed turpis tincidunt id aliquet risus feugiat in ante metus. Sed adipiscing diam donec adipiscing tristique risus nec feugiat in. Elit at imperdiet dui accumsan sit amet nulla facilisi. Scelerisque felis imperdiet proin fermentum leo. Vehicula ipsum a arcu cursus. Euismod in pellentesque massa placerat. Nec nam aliquam sem et tortor consequat id porta. Sit amet risus nullam eget felis eget nunc lobortis mattis. Mi eget mauris pharetra et."
}


exports.populateDummyData = populateDummyData;

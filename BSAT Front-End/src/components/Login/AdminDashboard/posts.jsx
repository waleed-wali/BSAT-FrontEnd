// import React from 'react';

// // Component: Header
// const Header = ({ title, onCreate }) => (
//   <div className="flex justify-between items-center mb-6">
//     <h2 className="text-2xl font-semibold">{title}</h2>
//     <button
//       onClick={onCreate}
//       className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700"
//     >
//       Create New Post
//     </button>
//   </div>
// );

// // Component: PostCard
// const PostCard = ({ title, description, buttonText, onEdit, onDelete }) => (
//   <div className="bg-white rounded-lg shadow-md p-6">
//     <div className="bg-gray-300 h-28 rounded-md mb-4 flex items-center justify-center">
//       <span className="text-gray-500">Image Placeholder</span>
//     </div>
//     <h3 className="text-lg font-medium mb-2">{title}</h3>
//     <p className="text-gray-600 mb-4">{description}</p>
//     <div className="flex justify-between">
//       <button
//         onClick={onEdit}
//         className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700"
//       >
//         {buttonText}
//       </button>
//       <button
//         onClick={onDelete}
//         className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
//       >
//         Delete
//       </button>
//     </div>
//   </div>
// );

// // Component: PostsList
// const PostsList = ({ posts, onEditPost, onDeletePost }) => (
//   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//     {posts.map((post) => (
//       <PostCard
//         key={post.id}
//         title={post.title}
//         description={post.description}
//         buttonText="Edit"
//         onEdit={() => onEditPost(post.id)}
//         onDelete={() => onDeletePost(post.id)}
//       />
//     ))}
//   </div>
// );

// // Main Component: Posts
// const Posts = () => {
//   const posts = [
//     {
//       id: 1,
//       title: 'Process 1',
//       description: 'Description of basic research you’ve conducted',
//     },
//     {
//       id: 2,
//       title: 'Synthesis',
//       description: 'Initial synthesis that you’ve done in SEO ',
//     },
//     {
//       id: 3,
//       title: 'Outcomes',
//       description: 'Interesting findings that came out of your analysis',
//     },
//   ];

//   // Handlers
//   const handleCreatePost = () => {
//     console.log('Create Post Clicked');
//   };

//   const handleEditPost = (postId) => {
//     console.log(`Edit Post with ID: ${postId}`);
//   };

//   const handleDeletePost = (postId) => {
//     console.log(`Delete Post with ID: ${postId}`);
//   };

//   return (
//     <main className="bg-white p-6">
//       <Header title="Posts" onCreate={handleCreatePost} />
//       <PostsList
//         posts={posts}
//         onEditPost={handleEditPost}
//         onDeletePost={handleDeletePost}
//       />
//     </main>
//   );
// };

// export default Posts;











// import React from 'react';

// // Component: Header
// const Header = ({ title, onCreate }) => (
//   <div className="flex justify-between items-center mb-6">
//     <h2 className="text-2xl font-semibold">{title}</h2>
//     <button
//       onClick={onCreate}
//       className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700"
//     >
//       Add New FAQ
//     </button>
//   </div>
// );

// // Component: FAQCard
// const FAQCard = ({ question, answer, buttonText, onEdit, onDelete }) => (
//   <div className="bg-white rounded-lg shadow-md p-6">
//     <h3 className="text-lg font-medium mb-2">{question}</h3>
//     <p className="text-gray-600 mb-4">{answer}</p>
//     <div className="flex justify-between">
//       <button
//         onClick={onEdit}
//         className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700"
//       >
//         {buttonText}
//       </button>
//       <button
//         onClick={onDelete}
//         className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
//       >
//         Delete
//       </button>
//     </div>
//   </div>
// );

// // Component: FAQsList
// const FAQsList = ({ faqs, onEditFAQ, onDeleteFAQ }) => (
//   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//     {faqs.map((faq) => (
//       <FAQCard
//         key={faq.id}
//         question={faq.question}
//         answer={faq.answer}
//         buttonText="Edit"
//         onEdit={() => onEditFAQ(faq.id)}
//         onDelete={() => onDeleteFAQ(faq.id)}
//       />
//     ))}
//   </div>
// );

// // Main Component: FAQs
// const FAQs = () => {
//   const faqs = [
//     {
//       id: 1,
//       question: 'What is basic research?',
//       answer: 'Basic research involves exploring and understanding core concepts in SEO.',
//     },
//     {
//       id: 2,
//       question: 'What is synthesis in SEO?',
//       answer: 'Synthesis is the process of combining findings to draw meaningful insights.',
//     },
//     {
//       id: 3,
//       question: 'What are the key outcomes?',
//       answer: 'Key outcomes include valuable insights and actionable recommendations.',
//     },
//   ];

//   // Handlers
//   const handleCreateFAQ = () => {
//     console.log('Create FAQ Clicked');
//   };

//   const handleEditFAQ = (faqId) => {
//     console.log(`Edit FAQ with ID: ${faqId}`);
//   };

//   const handleDeleteFAQ = (faqId) => {
//     console.log(`Delete FAQ with ID: ${faqId}`);
//   };

//   return (
//     <main className="bg-white p-6">
//       <Header title="FAQs" onCreate={handleCreateFAQ} />
//       <FAQsList
//         faqs={faqs}
//         onEditFAQ={handleEditFAQ}
//         onDeleteFAQ={handleDeleteFAQ}
//       />
//     </main>
//   );
// };

// export default FAQs;














import React, { useState } from 'react';

// Component: Header
const Header = ({ title, onCreate }) => (
  <div className="flex justify-between items-center mb-6">
    <h2 className="text-2xl font-semibold">{title}</h2>
    <button
      onClick={onCreate}
      className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700"
    >
      Add New FAQ
    </button>
  </div>
);

// Component: FAQCard
const FAQCard = ({ question, answer, buttonText, onEdit, onDelete }) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <h3 className="text-lg font-medium mb-2">{question}</h3>
    <p className="text-gray-600 mb-4">{answer}</p>
    <div className="flex justify-between">
      <button
        onClick={onEdit}
        className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700"
      >
        {buttonText}
      </button>
      <button
        onClick={onDelete}
        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
      >
        Delete
      </button>
    </div>
  </div>
);

// Component: FAQsList
const FAQsList = ({ faqs, onEditFAQ, onDeleteFAQ }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {faqs.map((faq) => (
      <FAQCard
        key={faq.id}
        question={faq.question}
        answer={faq.answer}
        buttonText="Edit"
        onEdit={() => onEditFAQ(faq.id)}
        onDelete={() => onDeleteFAQ(faq.id)}
      />
    ))}
  </div>
);

// Component: FAQForm (For Adding and Editing FAQ)
const FAQForm = ({ onSave, faq, onCancel }) => {
  const [question, setQuestion] = useState(faq ? faq.question : '');
  const [answer, setAnswer] = useState(faq ? faq.answer : '');

  const handleSave = () => {
    if (question && answer) {
      onSave({ id: faq ? faq.id : Date.now(), question, answer });
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <label className="block text-sm font-medium">Question</label>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Answer</label>
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>
      <div className="flex justify-end gap-4">
        <button
          onClick={handleSave}
          className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700"
        >
          Save
        </button>
        <button
          onClick={onCancel}
          className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

// Main Component: FAQs
const FAQs = () => {
  const [faqs, setFaqs] = useState([
    {
      id: 1,
      question: 'What is basic research?',
      answer: 'Basic research involves exploring and understanding core concepts in SEO.',
    },
    {
      id: 2,
      question: 'What is synthesis in SEO?',
      answer: 'Synthesis is the process of combining findings to draw meaningful insights.',
    },
    {
      id: 3,
      question: 'What are the key outcomes?',
      answer: 'Key outcomes include valuable insights and actionable recommendations.',
    },
  ]);
  const [isFormVisible, setFormVisible] = useState(false);
  const [editFAQ, setEditFAQ] = useState(null);

  // Handlers
  const handleCreateFAQ = () => {
    setFormVisible(true);
    setEditFAQ(null); // New FAQ form
  };

  const handleEditFAQ = (faqId) => {
    const faq = faqs.find((faq) => faq.id === faqId);
    setFormVisible(true);
    setEditFAQ(faq); // Editing existing FAQ
  };

  const handleDeleteFAQ = (faqId) => {
    setFaqs(faqs.filter((faq) => faq.id !== faqId));
  };

  const handleSaveFAQ = (newFAQ) => {
    if (editFAQ) {
      // Editing existing FAQ
      setFaqs(faqs.map((faq) => (faq.id === newFAQ.id ? newFAQ : faq)));
    } else {
      // Adding new FAQ
      setFaqs([...faqs, newFAQ]);
    }
    setFormVisible(false);
    setEditFAQ(null);
  };

  const handleCancel = () => {
    setFormVisible(false);
    setEditFAQ(null);
  };

  return (
    <main className="bg-white p-6">
      <Header title="FAQs" onCreate={handleCreateFAQ} />
      {isFormVisible ? (
        <FAQForm
          faq={editFAQ}
          onSave={handleSaveFAQ}
          onCancel={handleCancel}
        />
      ) : (
        <FAQsList
          faqs={faqs}
          onEditFAQ={handleEditFAQ}
          onDeleteFAQ={handleDeleteFAQ}
        />
      )}
    </main>
  );
};

export default FAQs;

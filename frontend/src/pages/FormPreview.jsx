import { useEffect, useState } from 'react';
import { fetchForm } from '../api/api';
import { useParams } from 'react-router-dom';

const FormPreview = () => {
  const { id } = useParams();
  const [form, setForm] = useState(null);

  useEffect(() => {
    const loadForm = async () => {
      try {
        const data = await fetchForm(id);
        setForm(data);
      } catch (error) {
        console.error("Failed to fetch form:", error);
      }
    };

    loadForm();
  }, [id]);

  if (!form) return <p>Loading form...</p>;

  return (
    <div>
      {form.headerImage && <img src={form.headerImage} alt="Header" />}
      <h1>{form.title}</h1>
      {form.questions.map((q, index) => (
        <div key={index}>
          <h2>{q.type}</h2>
          <p>{q.questionText}</p>
        </div>
      ))}
    </div>
  );
};

export default FormPreview;

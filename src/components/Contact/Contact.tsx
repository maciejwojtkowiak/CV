const Contact = () => {
  return (
    <div>
      <h1 className="text-yellow-700 text-center text-4xl font-[codeFont]">
        Contact
      </h1>
      <div className="grid grid-cols-2 border-2 border-yellow-700">
        <div>
          <form>
            <input type="email" />
          </form>
        </div>
        <div>
          <h1>Personal Informations</h1>'
          <input type="password" />
        </div>
      </div>
    </div>
  );
};

export default Contact;

class App extends React.Component {
  render() {
    const students = [
      { name: "John", marks: 25 },
      { name: "Peter", marks: 30 },
      { name: "Mary", marks: 28 },
      { name: "Steve", marks: 30 },
      { name: "Joe", marks: 28 },
      { name: "John", marks: 25 },
    ];

    return (
      <div>
        <h2>july-28-session</h2>
        <br />
        <Button />
        <Input />
        <ul>
          {students.map((student) => {
            return <Text name={student.name} marks={student.marks} />;
          })}
        </ul>
      </div>
    );
  }
}

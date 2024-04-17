// Replace "your-button-package" with the actual package name

interface LinkToButtonProps {
  onClick: (page: string) => (<Link to={page} />);
  label: string;
}

function LinkToButton() {
  return (
    <Link to="/">
      <Button className="btn btn-primary" onClick={(page: string) => <Link to={page} />}>
        Go back to home
      </Button>
    </Link>
  );
}

export default LinkToButton;

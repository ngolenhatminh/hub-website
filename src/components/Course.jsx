import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const Course = (props) => {
  return (
    <div>
      {props.course ? (
        <Card>
          {/* <CardMedia
            style={{ height: 0, paddingTop: "56.25%" }}
            image={props.course.courseImage.file.url}
            title={props.course.title}
          /> */}
          <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
              {props.course.title}
            </Typography>
            <Typography component="p">{props.course.description}</Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              color="primary"
              href={props.course.url}
              target="_blank"
            >
              Go To Course
            </Button>
          </CardActions>
        </Card>
      ) : null}
    </div>
  );
};
export default Course;

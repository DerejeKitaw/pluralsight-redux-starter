import React , {PropTypes} from 'react';

class CoursesPage extends React.Component{
    constructor (props,context){
        super (props, context);

        this.state={
            Course:{ title: null}
        };
    }
    onTitleChange(event){
        const cource = this.state.cource;
        cource.title = event.target.value;
        this.setState({cource: cource}); 
    }

    render(){
        return(
            <div className="jumbotron">
                <h1>Courses</h1>
                <h2>Add Cource</h2>
                <input
                    type="text"
                    onChange={this.onTitleChange}
                    value={this.state.cource.title}/>
                <input
                    type="submit"
                    value="save"
                    onChange={this.onClickSave}/>
            </div>
            
        );
    }
}

export default CoursesPage;
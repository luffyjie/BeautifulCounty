//
//  LaunchViewController.swift
//  JSFH
//
//  Created by zwj on 2019/6/22.
//  Copyright © 2019 BeautifulCounty. All rights reserved.
//

import UIKit

class LaunchViewController: BasicViewController {
    
    lazy var welcomeImageView: UIImageView = {
        let imageView = UIImageView.init(image: UIImage.init(named: "welcome"))
        imageView.contentMode = .scaleToFill
        return imageView;
    }()
    
    lazy var welcomeButton: UIButton = {
        let button = UIButton();
        button.setImage(UIImage.init(named: "welcomebtn"), for: .normal)
        button.addTarget(self, action: #selector(welcomeBtnAction), for: .touchUpInside)
        return button;
    }()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        view.addSubview(welcomeImageView)
        welcomeImageView.snp.makeConstraints { (make) in
            make.edges.equalToSuperview()
        }
        view.addSubview(welcomeButton)
        welcomeButton.snp.makeConstraints { (make) in
            make.width.equalTo(140)
            make.height.equalTo(40)
            make.right.equalToSuperview().offset(-30)
            make.bottom.equalToSuperview().offset(-60)
        }
    }
    
    @objc
    func welcomeBtnAction() {
        UIView .animate(withDuration: 0.5, animations: {
            self.view.alpha = 0
            self.welcomeButton.alpha = 0
            self.welcomeImageView.alpha = 0
        }) { (Bool) in
            self.view.removeFromSuperview()
        }
    }
    
    func startAnimation() {
        DispatchQueue.main.asyncAfter(deadline: .now() + 2) {
            self.welcomeBtnAction()
        }
    }

    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // Get the new view controller using segue.destination.
        // Pass the selected object to the new view controller.
    }
    */

}

//
//  WeexViewController.swift
//  JSFH
//
//  Created by zwj on 2019/6/18.
//  Copyright © 2019 BeautifulCounty. All rights reserved.
//

import UIKit

class WeexViewController: BasicViewController {
    
    var weexView: UIView?
    
    var weexUrl: URL?
    
    lazy var errorLabel: UILabel = {
        let label = UILabel()
        label.text = "请检查您的网络，需要联网才能使用！"
        return label
    }()
    
    lazy var instance: WXSDKInstance = {
        let instance = WXSDKInstance.init()
        return instance
    }()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        self.navigationController?.setNavigationBarHidden(true, animated: true)
        let net = NetworkReachabilityManager()
        if net?.isReachable ?? false {
            initWeexInstance()
        }else {
            view.addSubview(errorLabel)
            errorLabel.snp.makeConstraints { (make) in
                make.center.equalToSuperview()
            }
        }
    }
    
    func initWeexInstance(){
        instance.viewController = self
        instance.frame = view.frame
        instance.onCreate = { [weak self] (view: UIView?) in
            self?.weexView?.removeFromSuperview()
            self?.weexView = view
            if (view != nil) {
                view?.backgroundColor = .white
                self?.view.addSubview(view!)
            }
        }
        instance.onFailed  = { (AnyObject) in
            print(AnyObject ?? self)
        }
        instance.renderFinish = { (view: UIView?) in
            print(view ?? self)
        }
        weexUrl = URL.init(string: "http://62.234.160.65/dist/index.js")
        instance.render(with: weexUrl)
    }
}
